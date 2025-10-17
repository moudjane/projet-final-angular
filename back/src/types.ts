import { GraphQLResolveInfo } from 'graphql'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string, output: string }
  String: { input: string, output: string }
  Boolean: { input: boolean, output: boolean }
  Int: { input: number, output: number }
  Float: { input: number, output: number }
}

export type AuthInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type AuthPayload = {
  __typename?: 'AuthPayload'
  token: Scalars['String']['output']
  user: User
}

export type Comment = {
  __typename?: 'Comment'
  authorId?: Maybe<Scalars['String']['output']>
  authorName?: Maybe<Scalars['String']['output']>
  content?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  postId?: Maybe<Scalars['String']['output']>
}

export type CreatePostInput = {
  category?: InputMaybe<Scalars['String']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  url?: InputMaybe<Scalars['String']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  addComment: Comment
  createPost: Post
  deleteComment: Scalars['Boolean']['output']
  deletePost: Scalars['Boolean']['output']
  likePost: Scalars['Boolean']['output']
  login: AuthPayload
  logout?: Maybe<Scalars['Boolean']['output']>
  register: AuthPayload
  unlikePost: Scalars['Boolean']['output']
  updatePost: Post
}

export type MutationAddCommentArgs = {
  content: Scalars['String']['input']
  postId: Scalars['ID']['input']
}

export type MutationCreatePostArgs = {
  input: CreatePostInput
}

export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeletePostArgs = {
  id: Scalars['ID']['input']
}

export type MutationLikePostArgs = {
  postId: Scalars['ID']['input']
}

export type MutationLoginArgs = {
  input: AuthInput
}

export type MutationRegisterArgs = {
  input: AuthInput
}

export type MutationUnlikePostArgs = {
  postId: Scalars['ID']['input']
}

export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input']
  input: UpdatePostInput
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type PaginationInput = {
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
}

export type Post = {
  __typename?: 'Post'
  authorId?: Maybe<Scalars['String']['output']>
  authorName?: Maybe<Scalars['String']['output']>
  category?: Maybe<Scalars['String']['output']>
  comments?: Maybe<Array<Comment>>
  content?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  likes?: Maybe<Scalars['Int']['output']>
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type PostFilterInput = {
  author?: InputMaybe<Scalars['String']['input']>
  orderBy?: InputMaybe<PostOrderByInput>
}

export type PostOrderByInput = {
  direction: OrderDirection
  field: PostOrderField
}

export enum PostOrderField {
  CreatedAt = 'CREATED_AT',
  Likes = 'LIKES',
}

export type Query = {
  __typename?: 'Query'
  getPost?: Maybe<Post>
  getPosts: Array<Post>
  getUser?: Maybe<User>
  me?: Maybe<User>
}

export type QueryGetPostArgs = {
  id: Scalars['ID']['input']
}

export type QueryGetPostsArgs = {
  category?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<PostFilterInput>
  pagination?: InputMaybe<PaginationInput>
}

export type QueryGetUserArgs = {
  username: Scalars['String']['input']
}

export type UpdatePostInput = {
  category?: InputMaybe<Scalars['String']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type User = {
  __typename?: 'User'
  comments: Array<Scalars['String']['output']>
  createdAt: Scalars['String']['output']
  email: Scalars['String']['output']
  id: Scalars['ID']['output']
  posts: Array<Scalars['String']['output']>
  username: Scalars['String']['output']
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthInput: AuthInput
  AuthPayload: ResolverTypeWrapper<AuthPayload>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Comment: ResolverTypeWrapper<Comment>
  CreatePostInput: CreatePostInput
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  Mutation: ResolverTypeWrapper<{}>
  OrderDirection: OrderDirection
  PaginationInput: PaginationInput
  Post: ResolverTypeWrapper<Post>
  PostFilterInput: PostFilterInput
  PostOrderByInput: PostOrderByInput
  PostOrderField: PostOrderField
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']['output']>
  UpdatePostInput: UpdatePostInput
  User: ResolverTypeWrapper<User>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthInput: AuthInput
  AuthPayload: AuthPayload
  Boolean: Scalars['Boolean']['output']
  Comment: Comment
  CreatePostInput: CreatePostInput
  ID: Scalars['ID']['output']
  Int: Scalars['Int']['output']
  Mutation: {}
  PaginationInput: PaginationInput
  Post: Post
  PostFilterInput: PostFilterInput
  PostOrderByInput: PostOrderByInput
  Query: {}
  String: Scalars['String']['output']
  UpdatePostInput: UpdatePostInput
  User: User
}>

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  authorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  postId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationAddCommentArgs, 'content' | 'postId'>>
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'input'>>
  deleteComment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>
  deletePost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>
  likePost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationLikePostArgs, 'postId'>>
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>
  logout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  register?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>
  unlikePost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUnlikePostArgs, 'postId'>>
  updatePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'id' | 'input'>>
}>

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  authorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  likes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostArgs, 'id'>>
  getPosts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<QueryGetPostsArgs>>
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'username'>>
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
}>

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  comments?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  posts?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
  AuthPayload?: AuthPayloadResolvers<ContextType>
  Comment?: CommentResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Post?: PostResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  User?: UserResolvers<ContextType>
}>
