import React from "react";
import Layout from "components/layout/Layout";
import { useState } from "react";
import { useEffect } from "react";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import styled from "styled-components";
import Heading from "components/layout/Heading";
import { v4 } from "uuid";
import { debounce } from "lodash";
import ListPostItem from "module/post/ListPostItem";
import { Button } from "components/button";

const BLOG_LIST_PAGE = 5;

const HomeNewestStyles = styled.div`
  .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 40px;
    align-items: start;
  }
  .sidebar {
    padding: 28px 20px;
    background-color: ${(props) => props.theme.bluethin};
    border-radius: 16px;
  }
  @media screen and (max-width: 1023.98px) {
    .layout {
      grid-template-columns: 100%;
    }
    .sidebar {
      padding: 14px 10px;
    }
  }
`;
const ListBlogPage = () => {
  const [filter, setFilter] = useState("");
  const [lastDoc, setLastDoc] = useState();
  const [total, setTotal] = useState(0);

  const [posts, setPosts] = useState([]);
  const handleLoadMoreBlog = async () => {
    const nextRef = query(
      collection(db, "posts"),
      startAfter(lastDoc || 0),
      limit(BLOG_LIST_PAGE)
    );
    onSnapshot(nextRef, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts([...posts, ...results]);
    });
    const documentSnapshots = await getDocs(nextRef);

    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastDoc(lastVisible);
  };
  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "posts");
      const querySearch = filter
        ? query(
            colRef,
            where("title", ">=", filter),
            where("title", "<=", filter + "utf8")
          )
        : query(colRef, limit(6));
      const documentSnapshots = await getDocs(querySearch);

      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      onSnapshot(colRef, (snapshot) => {
        setTotal(snapshot.size);
      });
      setLastDoc(lastVisible);

      onSnapshot(querySearch, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(results);
      });
    }
    fetchData();
  }, [filter]);

  // const filterDebounce = useDebounce(filter, 500);

  const handleFilterChange = debounce((e) => {
    setFilter(e.target.value);
  }, 500);

  if (posts.length <= 0) return null;
  const [...other] = posts;

  return (
    <Layout>
      <div className="flex mb-10 wrapp-search max-w-[1200px] w-full mx-auto gap-2">
        <div className="flex-1 mx-8 search md:mx-0">
          <input
            type="text"
            className="w-full p-2 border outline-none md:p-4 rounded-xl border-primary "
            placeholder="Type here to search..."
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <HomeNewestStyles className="home-block">
        <div className="container">
          <Heading>All posts</Heading>
          <div className="blog__list--container">
            {other.length > 0 &&
              other.map((item) => (
                <ListPostItem key={v4()} data={item}></ListPostItem>
              ))}
          </div>
        </div>
      </HomeNewestStyles>
      {total > posts.length && (
        <div className="my-8">
          <Button className="mx-auto " onClick={handleLoadMoreBlog}>
            Load more
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default ListBlogPage;
