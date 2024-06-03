import { useEffect } from 'react';

const useFetchItems = (setItems) => {
  const getRandomDateTime = () => {
    const randomDate = new Date(
      Date.now() + Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
    );
    return randomDate.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(data => {
        const itemsWithDates = data.map(item => ({
          ...item,
          dateTime: getRandomDateTime()
        }));
        setItems(itemsWithDates);
      });
  }, [setItems]);
};

export default useFetchItems;