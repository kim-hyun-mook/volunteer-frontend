import { forwardRef, ForwardedRef, ChangeEvent } from 'react';
import Textarea from '../Textarea/Textarea';
import Paragraph from '../Paragraph/Paragraph';
import * as S from './style';
interface TextareaLabelProps {
  labelText: string;
  value: string;
	name: string; 
  placeholder: string;
  validateText: string;
  isValid: boolean;
  onBlur:()=> void;
  onChange: (event:ChangeEvent<HTMLTextAreaElement>)=> void;
}

const TextareaLabel = forwardRef(
  (
    { labelText, value, placeholder, onBlur, onChange, validateText, isValid, name }: TextareaLabelProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <S.TextareaLabelWrap>
        <label>{labelText}</label>
        <Textarea name={name} value={value} placeholder={placeholder} onBlur={onBlur} onChange={onChange} ref={ref} />
        <Paragraph paragraphText={validateText} $isValid={isValid} />
      </S.TextareaLabelWrap>
    );
  }
);

export default TextareaLabel;
