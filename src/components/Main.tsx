import { ScrollView, StyleSheet } from 'react-native';
import StyleButton from './StyleButton';
import StyleText from './StyleText';
import { Link } from 'react-router';


export default function Main() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StyleText>Goski Gallery</StyleText>
      <StyleText>Divulgue suas obras</StyleText>
      <Link href="/artsCatalog" asChild>
        <StyleButton>Visualizar Catalogo</StyleButton>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});