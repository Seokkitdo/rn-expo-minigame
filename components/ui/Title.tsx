import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/color';

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    padding: 12,
  },
});
