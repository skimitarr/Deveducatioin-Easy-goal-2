import { CardDetail } from '../components/CardDetail';
import { useLocation } from "react-router-dom";
import { ITask, IstateTodosProps } from '../components/Interfaces';
import { useEffect } from 'react';

function DetailPage({ stateTodos }: IstateTodosProps) {
  const location = useLocation();
  const title = location.state.title;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main className='container-body-detail'>
      {stateTodos.map((item: ITask) => {
        if (item.title === title) {
          return <CardDetail key={item.title} item={item} />
        }
      })}
    </main>
  );
}
export default DetailPage;

