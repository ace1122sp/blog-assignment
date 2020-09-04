import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NavLinks from '../nav-links';
import Card from '../card';

const Content = ({
  posts,
  getAllPosts,
  getPostsByCategory,
  editPost,
  deletePost,
}) => {
  useEffect(() => {
    getAllPosts();
  }, []);

  const links = [1, 2, 3].map((num) => ({
    description: `Category ${num}`,
    onClick: () => getPostsByCategory({ categoryId: num }),
  }));

  const renderPosts = () =>
    posts.map(({ id, title, categoryId, text, createdAt }, i) => (
      <Card
        key={id}
        id={id}
        title={title}
        categoryId={categoryId}
        text={text}
        createdAt={createdAt}
        bgClass={i % 2 ? 'bg-smoke-white' : undefined}
        editPost={editPost}
        deletePost={deletePost}
      />
    ));

  return (
    <main className='row flex-grow-1'>
      <aside className='col-lg-3 p-2 p-lg-3 bg-smoke-white mx-2 mx-lg-0 mb-2'>
        <h5 className='ml-2'>Blog categories</h5>
        <NavLinks data={links} />
      </aside>
      <div className='col-12 col-lg-9'>{renderPosts()}</div>
    </main>
  );
};

Content.propTypes = {
  posts: PropTypes.array.isRequired,
  getAllPosts: PropTypes.func.isRequired,
  getPostsByCategory: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

Content.defaultProps = {
  posts: [],
};

export default Content;
