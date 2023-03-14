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
    <>
      {page > 1 && (
        <button type="button" onClick={onClickPreviousPage}>
          Previous
        </button>
      )}
      <span>Page {page}</span>
      {page < pagesQuantity && (
        <button type="button" onClick={onClickNextPage}>
          Next
        </button>
      )}
    </>
  );
};
