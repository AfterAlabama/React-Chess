import { Colors } from "../../../../../types/Enums/Colors";
import { ChBoard } from "../../../ChBoard";
import { Checker } from "../../../Pieces/Checker";
import { DoesCheckerMoveLogic } from "./DoesCheckerMoveLogic";


describe(' Can Checker Move', () => {
  test('Black Checker Moves', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.BLACK, SpecialBoard.getCells(3,3))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard()
    const checker = new Checker(Colors.BLACK, SpecialBoard.getCells(3,3));
    const target = SpecialBoard.getCells(4, 4)

    expect(DoesCheckerMoveLogic(checker, target)).toBe(true)
  })
  test('White Checker Moves', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.WHITE, SpecialBoard.getCells(3,3))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard()
    const checker = new Checker(Colors.WHITE, SpecialBoard.getCells(3,3));
    const target = SpecialBoard.getCells(2, 2)

    expect(DoesCheckerMoveLogic(checker, target)).toBe(true)
  })
  test('Checker can\'t Move', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.BLACK, SpecialBoard.getCells(3,3))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard()
    const checker = new Checker(Colors.BLACK, SpecialBoard.getCells(3,3));
    const target = SpecialBoard.getCells(5, 5)

    expect(DoesCheckerMoveLogic(checker, target)).toBe(false)
  })
})