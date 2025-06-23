import { BubbleType } from './constants/bubbleSpriteFrame';
import config from './constants/config'
import { getNewPositionByStep } from './utils/getNewPositionByStep';
import { searchBombField, searchLineVertical } from './utils/searchLineVertical';
import { searchNeighbor } from './utils/searchNeighbor';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Board extends cc.Component {

    bubblePrefab: cc.Prefab

    board: Array<Array<cc.Node | null>> = new Array(config.BOARD_WIDTH).fill(null).map(() => new Array(config.BOARD_HEIGHT).fill(null));

    stepX: number

    stepY: number

    onBubbleClick: (position: cc.Vec2, type: BubbleType) => void = () => { };

    initGame(bubblePrefab: cc.Prefab, onBubbleClick: VoidFunction) {
        this.initStep()
        this.bubblePrefab = bubblePrefab
        this.onBubbleClick = onBubbleClick
        this.createBoard()
    }

    clear() {
        for (let y = 0; y < config.BOARD_WIDTH; y++) {
            for (let x = 0; x < config.BOARD_HEIGHT; x++) {
                const node = this.board[y]?.[x];
                if (node && node.isValid) {
                    node.destroy();
                }
            }
        }
        this.board = new Array(config.BOARD_WIDTH).fill(null).map(() => new Array(config.BOARD_HEIGHT).fill(null));
    }

    createBoard() {
        const sizeY = config.BOARD_HEIGHT;
        const sizeX = config.BOARD_WIDTH;


        for (let x = 0; x < sizeX; x++) {
            for (let y = 0; y < sizeY; y++) {
                const node = this.createBubble(cc.v2(x, y));
                this.board[x][y] = node
            }
        }
    }

    createBubble(position: cc.Vec2): cc.Node {
        const newBubble = cc.instantiate(this.bubblePrefab)
        const bubble = newBubble.getComponent('Bubble')
        const newPositionByStep = getNewPositionByStep(position, this.stepX, this.stepY)
        bubble.initType()
        bubble.initCoord(position)
        bubble.initSize(this.stepX > this.stepY ? this.stepY * 0.8 : this.stepX * 0.8)
        bubble.setBubblePosition(newPositionByStep)
        newBubble.on('bubble-click', this.handleBubbleClick, this);
        this.node.addChild(newBubble)
        return newBubble
    }

    getGroupToRemove(startPosition: cc.Vec2, type: BubbleType) {

        const startBubbleNode = this.board[startPosition.x][startPosition.y]
        if (!startBubbleNode) return

        if(type === 'bomb') {
            return searchBombField(startPosition, [], this.board, 2)
        }
        else {
            return  searchNeighbor(startPosition, new Set<string>(), [], type, this.board)
        }
    }

    


    removeGroup(group: cc.Node[], startPosition: cc.Vec2, type: BubbleType): number {
        if (group.length < 2) return 0
        for (let i = 0; i < group.length; i++) {
            const bubble = group[i].getComponent('Bubble')
            this.board[bubble.coord.x][bubble.coord.y] = null
            bubble.bubbleDestroy(type === 'bomb' ? 0 : i)
        }
        this.fillEmptySpace(group.length, startPosition, type)
        return group.length
    }

    fillEmptySpace(emtyCount: number, startPosition: cc.Vec2, type: BubbleType ) {        
        for (let x = 0; x < config.BOARD_WIDTH; x++) {
            let stepToDown = 0
            for (let y = 0; y < config.BOARD_HEIGHT; y++) {
                const node = this.board[x][y]
                if (!node) {
                    stepToDown++
                }
                else if (node && stepToDown > 0) {
                    const bubble = node.getComponent('Bubble')
                    const newPosition = getNewPositionByStep(cc.v2(x, y - stepToDown), this.stepX, this.stepY)
                    // Создание бонуса
                    if (startPosition.equals(cc.v2(x, y - stepToDown)) && emtyCount > config.COUNT_TO_GET_BOMB && type !== 'bomb' ){
                        bubble.initType('bomb')
                    }
                    bubble.moveToPosition(newPosition, type === 'bomb' ? 2 : emtyCount)
                    bubble.initCoord(cc.v2(x, y - stepToDown))
                    this.board[x][y - stepToDown] = node
                    this.board[x][y] = null
                }
                else continue
            }
            for (let i = 0; i < stepToDown; i++) {
                const newBubble = this.createBubble(cc.v2(x, config.BOARD_HEIGHT))
                const bubble = newBubble.getComponent('Bubble')
                bubble.initCoord(cc.v2(x, config.BOARD_HEIGHT - stepToDown + i))
                this.board[x][config.BOARD_HEIGHT - stepToDown + i] = newBubble
                const newPosition = getNewPositionByStep(cc.v2(x, config.BOARD_HEIGHT - stepToDown + i), this.stepX, this.stepY)
                // Создание бонуса
                if (startPosition.equals(cc.v2(x, config.BOARD_HEIGHT - stepToDown + i)) && emtyCount > config.COUNT_TO_GET_BOMB && type !== 'bomb'){
                    bubble.initType('bomb')
                }
                bubble.moveToPosition(newPosition, type === 'bomb' ? 2 : emtyCount + i * 2 )
            }
        }

    }



    handleBubbleClick(position: cc.Vec2, type: BubbleType) {
        this.onBubbleClick(position, type);
    }

    initStep() {
        this.stepX = (this.node.width - config.BOARD_SIZE * 2) / config.BOARD_WIDTH
        this.stepY = (this.node.height - config.BOARD_SIZE * 2) / config.BOARD_HEIGHT
    }


}
