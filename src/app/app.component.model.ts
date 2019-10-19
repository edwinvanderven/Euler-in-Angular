import { P1, P2, P3, P4, P5, P6, P7, P8, P9 } from './problems/1-to-9/index';
import { P10, P11, P12, P13, P14, P15, P16, P17, P18, P19 } from './problems/10-to-19/index';
import { P20, P21, P22, P23, P24, P25, P26, P27, P28, P29 } from './problems/20-to-29/index';
import { P30, P31, P32, P33, P34, P35, P36, P37, P38, P39 } from './problems/30-to-39/index';
import { P40, P41, P42, P43, P44, P45, P46, P47 } from './problems/40-to-49/index';

export interface IProblem {
  title: string;
  description: string;
  getAnswer(): string;
}

export const PROBLEMS: IProblem[] = [
  new P47(), new P46(), new P45(), new P44(), new P43(), new P42(), new P41(),
  new P40(), new P39(), new P38(), new P37(), new P36(), new P35(), new P34(), new P33(), new P32(), new P31(),
  new P30(), new P29(), new P28(), new P27(), new P26(), new P25(), new P24(), new P23(), new P22(), new P21(),
  new P20(), new P19(), new P18(), new P17(), new P16(), new P15(), new P14(), new P13(), new P12(), new P11(),
  new P10(), new P9(), new P8(), new P7(), new P6(), new P5(), new P4(), new P3(), new P2(), new P1()
];
