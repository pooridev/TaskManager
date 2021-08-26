import { FC } from 'react';
import MainLayout from './MainLayout/MainLayout';

export interface Props {}

const Home: FC<Props> = () => {
  return (
      <MainLayout>
        <header>Salam</header>
      </MainLayout>
  );
};

export default Home;
