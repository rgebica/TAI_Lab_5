package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import post.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

}