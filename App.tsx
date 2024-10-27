import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.sectionContainer, {
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
      marginHorizontal: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }]}>
      <Text style={[styles.sectionTitle, { color: getColorForTitle(title) }]}>
        {title}
      </Text>
      <Text style={[styles.sectionDescription, {
        color: '#4A4A4A'
      }]}>
        {children}
      </Text>
    </View>
  );
}

// Fungsi untuk memberikan warna berbeda untuk setiap judul
const getColorForTitle = (title: string) => {
  switch (title) {
    case 'Nama':
      return '#FF6B6B';  // Merah muda
    case 'NIM':
      return '#4ECDC4';  // Tosca
    case 'Kelas':
      return '#45B7D1';  // Biru muda
    case 'Media Sosial':
      return '#96CEB4';  // Hijau muda
    default:
      return '#666666';
  }
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#FFFFFF"
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Profil Mahasiswa</Text>
        </View>
        <View style={styles.contentContainer}>
          <Section title="Nama">
            Nurnita Permatasari
          </Section>
          <Section title="NIM">
            22/505630/SV/21849
          </Section>
          <Section title="Kelas">
            SIG 2022 B
          </Section>
          <Section title="Media Sosial">
            Let's discover about me:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    padding: 24,
    backgroundColor: '#FFE5E5',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  contentContainer: {
    paddingBottom: 24,
  },
  sectionContainer: {
    marginTop: 24,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;