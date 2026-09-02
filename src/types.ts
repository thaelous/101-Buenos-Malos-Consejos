export type Category = 'todos' | 'caracter' | 'dinero' | 'relaciones' | 'mentalidad' | 'vida' | 'virales';

export interface CommentSubmission {
  name: string;
  adviceOrComment: string;
  rating: number;
  platform: string;
}
