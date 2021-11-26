import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import ShowSelector from '@/components/ShowSelector';
import ShowContainer from '@/components/ShowContainer';
import { ShowType } from '@/components/Show';

const Home: React.FC = () => {
  const { data: shows, error } = useSWR<Array<ShowType>, boolean>(`${import.meta.env.VITE_API_URL}/shows`, fetcher);
  const [activeShow, setActiveShow] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const onItemClick = (id: string) => {
    setActiveShow(id);
    window.history.pushState(null, '', `?id=${id}`);
  };

  useEffect(() => {
    const handlePopState = () => {
      const query = new URLSearchParams(window.location.search);
      const queryId = query?.get('id');

      if (queryId && queryId !== activeShow) {
        setActiveShow(queryId);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const queryId = query?.get('id');

    if (queryId) {
      setActiveShow(queryId);
    }

    setLoading(false);
  }, []);

  if (error) {
    return <div className="text-center">Oops! Something went wrong.</div>;
  }

  if (loading || !shows) {
    return <div className="text-center">Hold on! Shows are loading.</div>;
  }

  return (
    <div className="homepage">
      <ShowContainer shows={shows} activeShow={activeShow ?? shows[0].id} />
      <ShowSelector items={shows.map(({ id }, key: number) => ({ id, number: key + 1 }))} onItemClick={onItemClick} />
    </div>
  );
};

export default Home;
