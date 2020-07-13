import { getUsersByIds, getUserById } from '../users';
import { getOrganizationByIds, getOrganizationById } from '../organizations';
import { getTagsByTitle } from '../tags';
import { getPostByIds, getPostById } from '../posts';
import { getNodesByIds } from '../nodes';
import { getCommentById, getCommentsByContainer, getCommentsByIds } from '../comments';

export const selectUserById = id => state => getUserById(state.users, id);
export const selectUsersByIds = (ids = []) => state => getUsersByIds(state.users, ids);
export const selectOrgsByIds = (ids = []) => state => getOrganizationByIds(state.organizations, ids);
export const selectOrgById = id => state => getOrganizationById(state.organizations, id);
export const selectTagsByTitles = (titles = []) => state => getTagsByTitle(state.tags, titles);
export const selectPostById = id => state => getPostById(state.posts, id);
export const selectPostsByIds = (ids = []) => state => getPostByIds(state.posts, ids);
export const selectOwner = state => getUserById(state.users, state.user.data.id) || {};
export const selectNodesByIds = (ids = []) => state => getNodesByIds(state.nodes, ids);
export const selectCommentById = id => state => getCommentById(state.comments, id);
export const selectCommentsByIds = ids => state => getCommentsByIds(state.comments, ids);
export const selectCommentsByContainerId = (containerId, entryId) => state => getCommentsByContainer(state, containerId, entryId);
export const selectUser = state => state.user.data;
