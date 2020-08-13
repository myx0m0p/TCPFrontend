import React from 'react';
import Post from './index';
import { postsFetch } from '../../actions/posts';
import { getPublicationMetaTags } from '../../utils/posts';

export const DefaultPost = ({ match }) => (
  <Post postId={match.params.postId} />
);

export const getDefaultPostData = async (store, params) => {
  try {
    const data = await store.dispatch(postsFetch({
      postId: params.postId,
    }));

    return {
      contentMetaTags: getPublicationMetaTags(data),
    };
  } catch (e) {
    throw e;
  }
};