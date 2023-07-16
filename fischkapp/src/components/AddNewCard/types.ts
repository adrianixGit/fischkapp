export interface FlashCardType {
  _id: number;
  front: string;
  back: string;
}

export type NewFlashCardType = {
  front: string;
  back: string;
};

// export interface FlashCardTypeWithId extends FlashCardType {
//   id?: number;
// }
