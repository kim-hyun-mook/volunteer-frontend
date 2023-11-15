import styled from 'styled-components';

interface StPagragraphProps {
  $isValid?: boolean;
}

const StParagraph = styled.p<StPagragraphProps>`
  color: ${(props) => (props.$isValid ? '': '#fb304b')};
`;

interface ParagraphProps {
  paragraphText?: string;
  $isValid?: boolean;
}

const Paragraph = ({ paragraphText, $isValid }: ParagraphProps) => {
  return <StParagraph $isValid={$isValid}>{paragraphText}</StParagraph>;
};

export default Paragraph;
