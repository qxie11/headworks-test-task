import React, { useState } from 'react';
import { UsersData } from './../../types/global';
import { useDispatch, useSelector } from 'react-redux';
import { loadData, setLoading } from './../../actions/main';
import ClientInfo from './ClientInfo';
import { RootState } from '../../reducers';
import Loading from './Loading';

interface Props {
  data: UsersData[] | null,
  err: boolean
}

const ClinetsList: React.FC<Props> = ({ data, err }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(({ main: { isLoading } }: RootState) => isLoading)
  const [page, setPage] = useState<number>(1);

  const renderMoreUsers = async ({ target: {
    scrollTop,
    clientHeight,
    scrollHeight
  } }: any) => {

    if (scrollTop + clientHeight === scrollHeight && !isLoading) {
      dispatch(setLoading(true))
      setPage(page + 1);
      dispatch(loadData(page + 1));
    }
  }

  return (
    <div onScroll={renderMoreUsers} className={`${isLoading ? "" : "pb40"} main__list`}>
      {
        err ? <p className="main__list-err">Oops, something went wrong(</p> :
          (data && data.map((client, i) => <ClientInfo key={i + client.date} client={client} />))
      }
      {
        isLoading && <Loading />
      }
    </div>
  )
}

export default React.memo(ClinetsList);
