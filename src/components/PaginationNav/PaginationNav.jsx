import { Wrapper, Button, Text } from "./PaginationNav.styled";

export const PaginationNav = ({ page, pagesQuantity, setPage }) => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
      const onClickPreviousPage = () => {
        setPage(prev => prev - 1);
        scrollToTop();
      };
    
      const onClickNextPage = () => {
        setPage(prev => prev + 1);
        scrollToTop();
      };

  return (
    <Wrapper>
      {page > 1 && (
        <Button type="button" onClick={onClickPreviousPage}>
          Previous
        </Button>
      )}
      <Text>Page {page}</Text>
      {page < pagesQuantity && (
        <Button type="button" onClick={onClickNextPage}>
          Next
        </Button>
      )}
    </Wrapper>
  );
};
