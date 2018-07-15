import { IBlogPost } from '../types';

export default class BlogPostApi {
  public static getBlogPosts() {
    return new Promise<IBlogPost>((resolve, reject) => {
      fetch('https://sgvcnj5wp1.execute-api.us-east-1.amazonaws.com/dev/recent-posts?blog_name=kpitzen.io', {
             mode: 'cors',}).then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error));
    });
  }
}
