import '../App.css';
import { Card } from '../components/Card';
import { IstateTodosProps, ITask } from '../components/Interfaces';

const Home = ({ stateTodos }: IstateTodosProps) => {
  return (
    <main className="main text-center">
      <div className="row">
        {stateTodos.map((item: ITask) => (
          <div className="col-md-4 col-sm-6 card-wrapper" key={item.title}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
export default Home;
