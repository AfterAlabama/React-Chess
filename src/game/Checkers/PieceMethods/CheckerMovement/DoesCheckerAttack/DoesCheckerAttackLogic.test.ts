import { Colors } from "../../../../../types/Enums/Colors";
import { ChBoard } from "../../../ChBoard";
import { Checker } from "../../../Pieces/Checker";
import { DoesCheckerAttackLogic } from "./DoesCheckerAttackLogic";


describe('DoesCheckerAttackLogic', () => {
  test('White Checker Attacks To The Left', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.WHITE, SpecialBoard.getCells(3,3))
      new Checker(Colors.BLACK, SpecialBoard.getCells(2,2))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard()
    const target = SpecialBoard.getCells(1,1)
    const checker = new Checker(Colors.WHITE, SpecialBoard.getCells(3,3));

    expect(DoesCheckerAttackLogic(checker, target)).toBe(true)
  })
  test('White Checker Attacks To The Right', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.WHITE, SpecialBoard.getCells(3,3))
      new Checker(Colors.BLACK, SpecialBoard.getCells(4,2))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard()
    const target = SpecialBoard.getCells(5,1)
    const checker = new Checker(Colors.WHITE, SpecialBoard.getCells(3,3));

    expect(DoesCheckerAttackLogic(checker, target)).toBe(true)
  })
  test('Black Checker Attacks To The Right', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.BLACK, SpecialBoard.getCells(3,3))
      new Checker(Colors.WHITE, SpecialBoard.getCells(4,4))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard()
    const target = SpecialBoard.getCells(5,5)
    const checker = new Checker(Colors.BLACK, SpecialBoard.getCells(3,3));

    expect(DoesCheckerAttackLogic(checker, target)).toBe(true)
  })
  test('Black Checker Attacks To The Left', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.BLACK, SpecialBoard.getCells(3,3))
      new Checker(Colors.WHITE, SpecialBoard.getCells(2,4))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard()
    const target = SpecialBoard.getCells(1,5)
    const checker = new Checker(Colors.BLACK, SpecialBoard.getCells(3,3));

    expect(DoesCheckerAttackLogic(checker, target)).toBe(true)
  })
  test('Checker Can\'t attack', () => {
    const CreateSpecialBoard = () => {
      const SpecialBoard = new ChBoard()
      SpecialBoard.initCells()
      new Checker(Colors.BLACK, SpecialBoard.getCells(3,3))
      return SpecialBoard
    }
    const SpecialBoard = CreateSpecialBoard()
    const target = SpecialBoard.getCells(1,5)
    const checker = new Checker(Colors.BLACK, SpecialBoard.getCells(3,3));

    expect(DoesCheckerAttackLogic(checker, target)).toBe(false)
  })
})