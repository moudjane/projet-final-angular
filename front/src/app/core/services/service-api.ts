import { inject, Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import {
  GetPostsQuery,
  GetPostsQueryVariables,
  LikePostMutation,
  LikePostMutationVariables,
  UnlikePostMutation,
  UnlikePostMutationVariables,
  CreatePostMutation,
  CreatePostMutationVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
  DeletePostMutation,
  DeletePostMutationVariables,
} from '../../../../graphql/generated';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly apollo = inject(Apollo);

  // Queries & mutations (documents kept here so codegen still picks them up)
  private static readonly GET_POSTS = gql`
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

  private static readonly GET_POST = gql`
    query GetPost($id: ID!) {
      getPost(id: $id) {
        id
        title
        content
        createdAt
        authorId
        authorName
        likes
        category
        comments {
          id
          content
        }
      }
    }
  `;

  private static readonly LIKE_POST = gql`
    mutation LikePost($postId: ID!) {
      likePost(postId: $postId)
    }
  `;

  private static readonly UNLIKE_POST = gql`
    mutation UnlikePost($postId: ID!) {
      unlikePost(postId: $postId)
    }
  `;

  private static readonly ADD_COMMENT = gql`
    mutation AddComment($postId: ID!, $content: String!) {
      addComment(postId: $postId, content: $content) {
        id
        content
      }
    }
  `;

  private static readonly CREATE_POST = gql`
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

  private static readonly UPDATE_POST = gql`
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

  private static readonly DELETE_POST = gql`
    mutation DeletePost($id: ID!) {
      deletePost(id: $id)
    }
  `;

  watchPosts(variables: GetPostsQueryVariables): QueryRef<GetPostsQuery, GetPostsQueryVariables> {
    return this.apollo.watchQuery<GetPostsQuery, GetPostsQueryVariables>({
      query: ApiService.GET_POSTS,
      variables,
      fetchPolicy: 'network-only',
    });
  }

  getPost(id: string) {
    return this.apollo.query<{ getPost: any }, { id: string }>({
      query: ApiService.GET_POST,
      variables: { id },
      fetchPolicy: 'network-only',
    });
  }

  likePost(postId: string) {
    return this.apollo.mutate<LikePostMutation, LikePostMutationVariables>({
      mutation: ApiService.LIKE_POST,
      variables: { postId },
    });
  }

  unlikePost(postId: string) {
    return this.apollo.mutate<UnlikePostMutation, UnlikePostMutationVariables>({
      mutation: ApiService.UNLIKE_POST,
      variables: { postId },
    });
  }

  addComment(postId: string, content: string) {
    return this.apollo.mutate<{ addComment: { id: string; content: string } }, { postId: string; content: string }>({
      mutation: ApiService.ADD_COMMENT,
      variables: { postId, content },
    });
  }

  createPost(input: { title: string; content?: string; url?: string; category?: string }) {
    // GraphQL codegen requires nullable fields to be present with null instead of undefined
    const variables: CreatePostMutationVariables = {
      input: {
        title: input.title,
        content: input.content ?? null,
        category: input.category ?? null,
        url: input.url ?? null,
      },
    };

    return this.apollo.mutate<CreatePostMutation, CreatePostMutationVariables>({
      mutation: ApiService.CREATE_POST,
      variables,
      refetchQueries: [{ query: ApiService.GET_POSTS }],
    });
  }

  updatePost(
    id: string,
    input: { title?: string; content?: string; url?: string; category?: string }
  ) {
    // Ensure we pass nulls for omitted optional fields to satisfy UpdatePostInput
    const sanitizedInput: UpdatePostMutationVariables['input'] = {
      title: input.title ?? null,
      content: input.content ?? null,
      url: input.url ?? null,
      category: input.category ?? null,
    };

    return this.apollo.mutate<UpdatePostMutation, UpdatePostMutationVariables>({
      mutation: ApiService.UPDATE_POST,
      variables: { id, input: sanitizedInput },
    });
  }

  deletePost(id: string) {
    return this.apollo.mutate<DeletePostMutation, DeletePostMutationVariables>({
      mutation: ApiService.DELETE_POST,
      variables: { id },
    });
  }
}