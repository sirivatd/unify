import * as APIUtil from "../util/conversation_api_util";

export const RECEIVE_ALL_CONVERSATIONS = "RECEIVE_ALL_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const REMOVE_CONVERSATION = "REMOVE_CONVERSATION";
export const RECEIVE_SELECTED_CONVERSATION = "RECEIVE_SELECTED_CONVERSATION";

export const receiveAllConversations = conversations => {
  return {
    type: RECEIVE_ALL_CONVERSATIONS,
    conversations: conversations
  };
};

export const receiveConversation = conversation => {
  return {
    type: RECEIVE_CONVERSATION,
    conversation: conversation
  };
};

export const receiveSelectedConversation = conversation => {
  return {
    type: RECEIVE_SELECTED_CONVERSATION,
    conversation: conversation
  };
};

export const removeConversation = (conversation) => {
  return {
    type: REMOVE_CONVERSATION,
    conversation: conversation
  };
};

// thunk action creators

export const fetchAllConversations = () => dispatch => {
  return APIUtil.fetchConversations().then(res =>
    dispatch(receiveAllConversations(res))
  );
};

export const createConversation = (conversation) => dispatch => {
  return APIUtil.createConversation(conversation).then(res =>
    dispatch(receiveConversation(res))
  );
};

export const removeSelectedConversation = (conversationId) => dispatch => {
  return APIUtil.removeConversation(conversationId).then(res => 
    dispatch(removeConversation(conversation))
  );
};

export const selectConversation = conversation => dispatch => {
  return dispatch(receiveSelectedConversation(conversation));
};