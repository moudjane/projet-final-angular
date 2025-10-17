import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: User;
};

export type Comment = {
  __typename?: 'Comment';
  authorId: Maybe<Scalars['String']['output']>;
  authorName: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  postId: Maybe<Scalars['String']['output']>;
};

export type CreatePostInput = {
  category: InputMaybe<Scalars['String']['input']>;
  content: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  url: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: Comment;
  createPost: Post;
  deleteComment: Scalars['Boolean']['output'];
  deletePost: Scalars['Boolean']['output'];
  likePost: Scalars['Boolean']['output'];
  login: AuthPayload;
  logout: Maybe<Scalars['Boolean']['output']>;
  register: AuthPayload;
  unlikePost: Scalars['Boolean']['output'];
  updatePost: Post;
};


export type MutationAddCommentArgs = {
  content: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLikePostArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  input: AuthInput;
};


export type MutationRegisterArgs = {
  input: AuthInput;
};


export type MutationUnlikePostArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePostInput;
};

export type OrderDirection =
  | 'ASC'
  | 'DESC';

export type PaginationInput = {
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  __typename?: 'Post';
  authorId: Maybe<Scalars['String']['output']>;
  authorName: Maybe<Scalars['String']['output']>;
  category: Maybe<Scalars['String']['output']>;
  comments: Maybe<Array<Comment>>;
  content: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  likes: Maybe<Scalars['Int']['output']>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type PostFilterInput = {
  author: InputMaybe<Scalars['String']['input']>;
  orderBy: InputMaybe<PostOrderByInput>;
};

export type PostOrderByInput = {
  direction: OrderDirection;
  field: PostOrderField;
};

export type PostOrderField =
  | 'CREATED_AT'
  | 'LIKES';

export type Query = {
  __typename?: 'Query';
  getPost: Maybe<Post>;
  getPosts: Array<Post>;
  getUser: Maybe<User>;
  me: Maybe<User>;
};


export type QueryGetPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPostsArgs = {
  category: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PostFilterInput>;
  pagination: InputMaybe<PaginationInput>;
};


export type QueryGetUserArgs = {
  username: Scalars['String']['input'];
};

export type UpdatePostInput = {
  category: InputMaybe<Scalars['String']['input']>;
  content: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  comments: Array<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  posts: Array<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  input: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: string, username: string, email: string, posts: Array<string>, comments: Array<string>, createdAt: string } } };

export const LoginDocument = gql`
    mutation Login($input: AuthInput!) {
  login(input: $input) {
    token
    user {
      id
      username
      email
      posts
      comments
      createdAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }