import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

const Post = ({ content, postImg, title, author }) => (
  <View style={styles.main}>
    <Image
      source={{ uri: postImg}}
      style={styles.image}
    />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>By: {author}</Text>
      <Text>{content}</Text>
    </View>
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.buttonText}>Read more</Text>
    </TouchableOpacity>
  </View>

);

export default Post;
