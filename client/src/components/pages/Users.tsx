import React, { useState, useMemo, useCallback } from 'react';
import Layout from '../templates/Layout';
import SideBar from '../organisms/users/SideBar';
import ThumbNail from '../organisms/users/ThumbNail';
import FlexLayout from '../atoms/FlexLayout';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';

interface Props {
  currentUser: CurrentUserType;
  allUsers: ArrayPartialUserType;
}

const Users: React.FC<Props> = ({ currentUser, allUsers }) => {
  const [searchName, setSearchName] = useState<string>('');
  const [searchCourse, setSearchCourse] = useState<string>('');
  const [sort, setSort] = useState<{ key?: string; order?: number }>({});

  const onChangeSearchName = (e: React.ChangeEvent<any>) => {
    setSearchName(e.currentTarget.value);
  };
  const onChangeSearchCourse = (e: React.ChangeEvent<any>) => {
    setSearchCourse(e.currentTarget.value);
  };

  const handleSort = useCallback(
    (column: string) => {
      if (sort.key === column && sort.order) {
        setSort({ ...sort, order: -sort.order });
      } else {
        setSort({
          key: column,
          order: 1,
        });
      }
    },
    [sort]
  );

  const users = useMemo(() => {
    let tmpUsers = allUsers;

    if (searchName) {
      tmpUsers = allUsers.filter((user) => {
        if (!user.name) {
          return null;
        }
        return user.name.includes(searchName);
      });
    }
    if (searchCourse) {
      tmpUsers = allUsers.filter((user) => {
        if (!user.homeCourse) {
          return null;
        }
        return user.homeCourse.includes(searchCourse);
      });
    }
    if (sort.key && sort.order) {
      tmpUsers = tmpUsers.sort((a, b) => {
        const aa = a[sort.key as keyof UserType] || 0;
        const bb = b[sort.key as keyof UserType] || 0;
        const order = sort.order || 1;
        return (aa === bb ? 0 : aa > bb ? 1 : -1) * order;
      });
    }
    return tmpUsers;
  }, [allUsers, searchName, searchCourse, sort]);

  return (
    <Layout currentUser={currentUser}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <FlexLayout
          left={
            <SideBar
              onChangeSearchName={onChangeSearchName}
              onChangeSearchCourse={onChangeSearchCourse}
              searchName={searchName}
              searchCourse={searchCourse}
              onClick={handleSort}
            />
          }
          right={<ThumbNail datas={users} />}
        />
      </Padding>
    </Layout>
  );
};
export default Users;
