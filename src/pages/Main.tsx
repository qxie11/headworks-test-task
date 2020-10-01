import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData, setData, setLoading } from '../actions/main'
import { RootState } from '../reducers/';
import ClinetsList from '../components/Main/ClientsList';
import { UsersData } from './../types/global/index';


const Main: React.FC = () => {
    const dispatch = useDispatch();
    const _data = useSelector(({ main: { data } }: RootState) => data);
    const err = useSelector(({ main: { err } }: RootState) => err);

    const data: UsersData[] | null = useMemo(() => _data, [_data])

    useEffect(() => {
        dispatch(loadData());

        return () => {
            dispatch(setData(null));
            dispatch(setLoading(true));
        };
    }, [dispatch]);

    return (
        <div className="main">
            <ClinetsList data={data} err={err} />
        </div>
    )
}
export default Main;