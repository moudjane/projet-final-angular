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

export type RegisterMutationVariables = Exact<{
  input: AuthInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: string, username: string, email: string, posts: Array<string>, comments: Array<string>, createdAt: string } } };

export type GetPostsQueryVariables = Exact<{
  filter: InputMaybe<PostFilterInput>;
  pagination: InputMaybe<PaginationInput>;
  category: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPostsQuery = { __typename?: 'Query', getPosts: Array<{ __typename?: 'Post', id: string | null, title: string | null, createdAt: string | null, authorId: string | null, authorName: string | null, content: string | null, likes: number | null, category: string | null }> };

export type LikePostMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost: boolean };

export type UnlikePostMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type UnlikePostMutation = { __typename?: 'Mutation', unlikePost: boolean };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string | null, title: string | null, content: string | null, createdAt: string | null, authorId: string | null, authorName: string | null, likes: number | null, category: string | null } };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string | null, title: string | null, content: string | null, createdAt: string | null, authorId: string | null, authorName: string | null, likes: number | null, category: string | null } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost: { __typename?: 'Post', id: string | null, title: string | null, content: string | null, createdAt: string | null, authorId: string | null, authorName: string | null, likes: number | null, comments: Array<{ __typename?: 'Comment', id: string | null, content: string | null }> | null } | null };

export type AddCommentMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment: { __typename?: 'Comment', id: string | null, content: string | null, authorId: string | null, authorName: string | null, createdAt: string | null, postId: string | null } };

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
export const RegisterDocument = gql`
    mutation Register($input: AuthInput!) {
  register(input: $input) {
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
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPostsDocument = gql`
    query GetPosts($filter: PostFilterInput, $pagination: PaginationInput, $category: String) {
  getPosts(filter: $filter, pagination: $pagination, category: $category) {
    id
    title
    createdAt
    authorId
    authorName
    content
    likes
    category
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostsGQL extends Apollo.Query<GetPostsQuery, GetPostsQueryVariables> {
    document = GetPostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikePostDocument = gql`
    mutation LikePost($postId: ID!) {
  likePost(postId: $postId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LikePostGQL extends Apollo.Mutation<LikePostMutation, LikePostMutationVariables> {
    document = LikePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UnlikePostDocument = gql`
    mutation UnlikePost($postId: ID!) {
  unlikePost(postId: $postId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UnlikePostGQL extends Apollo.Mutation<UnlikePostMutation, UnlikePostMutationVariables> {
    document = UnlikePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePostDocument = gql`
    mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    content
    createdAt
    authorId
    authorName
    likes
    category
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePostGQL extends Apollo.Mutation<CreatePostMutation, CreatePostMutationVariables> {
    document = CreatePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
  updatePost(id: $id, input: $input) {
    id
    title
    content
    createdAt
    authorId
    authorName
    likes
    category
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePostGQL extends Apollo.Mutation<UpdatePostMutation, UpdatePostMutationVariables> {
    document = UpdatePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePostDocument = gql`
    mutation DeletePost($id: ID!) {
  deletePost(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePostGQL extends Apollo.Mutation<DeletePostMutation, DeletePostMutationVariables> {
    document = DeletePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPostDocument = gql`
    query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    content
    createdAt
    authorId
    authorName
    likes
    comments {
      id
      content
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostGQL extends Apollo.Query<GetPostQuery, GetPostQueryVariables> {
    document = GetPostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddCommentDocument = gql`
    mutation AddComment($postId: ID!, $content: String!) {
  addComment(postId: $postId, content: $content) {
    id
    content
    authorId
    authorName
    createdAt
    postId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddCommentGQL extends Apollo.Mutation<AddCommentMutation, AddCommentMutationVariables> {
    document = AddCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }