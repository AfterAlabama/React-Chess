import { Colors } from "../../../../types/Enums/Colors";
import { ChBoard } from "../../ChBoard";
import { Checker } from "../../Pieces/Checker";
import { CheckerAttack } from "./CheckerAttack";

describe('Checker Attack', () => {
  test('White Checker To the Left', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.WHITE, SpecialBoard.getCells(3,4))
      new Checker(Colors.BLACK, SpecialBoard.getCells(2,3))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard();
    const target = SpecialBoard.getCells(1, 2);
    const selectedChCell = SpecialBoard.getCells(3,4);
    const movePiece = jest.spyOn(selectedChCell, 'movePiece')

    CheckerAttack(selectedChCell, SpecialBoard, target)

    expect(movePiece).toBeCalledTimes(1)
    expect(movePiece).toBeCalledWith(target)
    expect(SpecialBoard.getCells(2, 3).piece).toBeNull()
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('White Checker To the Right', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.WHITE, SpecialBoard.getCells(3,4))
      new Checker(Colors.BLACK, SpecialBoard.getCells(4,3))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard();
    const target = SpecialBoard.getCells(5, 2);
    const selectedChCell = SpecialBoard.getCells(3,4);
    const movePiece = jest.spyOn(selectedChCell, 'movePiece')

    CheckerAttack(selectedChCell, SpecialBoard, target)

    expect(movePiece).toBeCalledTimes(1)
    expect(movePiece).toBeCalledWith(target)
    expect(SpecialBoard.getCells(4, 3).piece).toBeNull()
  })

  test('Black Checker To the Left', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.BLACK, SpecialBoard.getCells(3,4))
      new Checker(Colors.WHITE, SpecialBoard.getCells(2,5))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard();
    const target = SpecialBoard.getCells(1, 6);
    const selectedChCell = SpecialBoard.getCells(3,4);
    const movePiece = jest.spyOn(selectedChCell, 'movePiece')

    CheckerAttack(selectedChCell, SpecialBoard, target)

    expect(movePiece).toBeCalledTimes(1)
    expect(movePiece).toBeCalledWith(target)
    expect(SpecialBoard.getCells(2, 5).piece).toBeNull()
  })

  test('Black Checker To the Right', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.BLACK, SpecialBoard.getCells(3,4))
      new Checker(Colors.WHITE, SpecialBoard.getCells(4,5))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard();
    const target = SpecialBoard.getCells(5, 6);
    const selectedChCell = SpecialBoard.getCells(3,4);
    const movePiece = jest.spyOn(selectedChCell, 'movePiece')

    CheckerAttack(selectedChCell, SpecialBoard, target)

    expect(movePiece).toBeCalledTimes(1)
    expect(movePiece).toBeCalledWith(target)
    expect(SpecialBoard.getCells(4, 5).piece).toBeNull()
  })

  test('Checker can\'t attack', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.BLACK, SpecialBoard.getCells(3,4))
      new Checker(Colors.WHITE, SpecialBoard.getCells(4,5))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard();
    const target = SpecialBoard.getCells(6, 6);
    const selectedChCell = SpecialBoard.getCells(3,4);
    const movePiece = jest.spyOn(selectedChCell, 'movePiece')

    CheckerAttack(selectedChCell, SpecialBoard, target)

    expect(movePiece).toBeCalledTimes(0)
    expect(SpecialBoard.getCells(4, 5).piece).not.toBeNull()
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })
})