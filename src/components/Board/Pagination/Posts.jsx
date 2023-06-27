import React from 'react';

function Posts({ info }) {
  return (
    <div>
      {info !== undefined
        ? info.map((data, idx) => {
            return (
              <div key={idx}>
                <div subject="no">{data.id}</div>
                <div subject="title">{data.title}</div>
                <div subject="no">{data.userId}</div>
              </div>
            );
          })
        : ''}
    </div>
  );
}

export default Posts;
