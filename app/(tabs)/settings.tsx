import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const faqs = [
  { question: "How to use this app?", answer: "Simply add tasks and mark them as done when completed. You can also edit or delete tasks." },
  { question: "Can I clear all tasks?", answer: "Yes, you can clear all your tasks from the settings page." },
  { question: "How to manage notifications?", answer: "Enable or disable notifications from the settings page to stay updated." },
];

export default function SettingsScreen() {
  const [username, setUsername] = useState('');
  const [showFaq, setShowFaq] = useState(false);
  const [privacyPolicyVisible, setPrivacyPolicyVisible] = useState(false);
  const [termsVisible, setTermsVisible] = useState(false);
  const [cookiePolicyVisible, setCookiePolicyVisible] = useState(false);
  const [appPermissionsVisible, setAppPermissionsVisible] = useState(false);
  const [dataProtectionVisible, setDataProtectionVisible] = useState(false);
  const [greeting, setGreeting] = useState('');

  const router = useRouter();

  useEffect(() => {
    const loadUsername = async () => {
      const savedUsername = await AsyncStorage.getItem('username');
      if (savedUsername) {
        setUsername(savedUsername);
        setGreeting(`Hi, ${savedUsername}! Welcome back.`);
      } else {
        setGreeting('Hi! Please enter your username.');
      }
    };

    loadUsername();
  }, []);

  const handleSaveUsername = async () => {
    if (username) {
      await AsyncStorage.setItem('username', username);
      setGreeting(`Hi, ${username}! Welcome back.`);
      Alert.alert('Username Saved', 'Your username has been saved successfully!');
    } else {
      Alert.alert('Error', 'Please enter a valid username.');
    }
  };

  const toggleFaq = () => setShowFaq(!showFaq);

  const toggleSection = (section: string) => {
    switch (section) {
      case 'privacyPolicy':
        setPrivacyPolicyVisible(!privacyPolicyVisible);
        break;
      case 'terms':
        setTermsVisible(!termsVisible);
        break;
      case 'cookiePolicy':
        setCookiePolicyVisible(!cookiePolicyVisible);
        break;
      case 'appPermissions':
        setAppPermissionsVisible(!appPermissionsVisible);
        break;
      case 'dataProtection':
        setDataProtectionVisible(!dataProtectionVisible);
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.greeting}>{greeting}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        <Button title="Save Username" onPress={handleSaveUsername} />
      </View>

      <View style={styles.faqContainer}>
        <TouchableOpacity onPress={toggleFaq}>
          <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
        </TouchableOpacity>
        {showFaq && faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <Text style={styles.faqQuestion}>{faq.question}</Text>
            <Text style={styles.faqAnswer}>{faq.answer}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.expandableSection} onPress={() => toggleSection('privacyPolicy')}>
        <Text style={styles.sectionTitle}>Privacy Policy</Text>
      </TouchableOpacity>
      {privacyPolicyVisible && (
        <Text style={styles.sectionContent}>
We value your privacy and take great care in protecting your personal data. We do not collect personal information without your consent. We only use data that you provide voluntarily, such as username or other optional inputs. Your information is stored securely, and we will not share it with third parties unless required by law. By using this app, you agree to our Privacy Policy. If you have any questions regarding our practices, please feel free to reach out.        </Text>
      )}

      <TouchableOpacity style={styles.expandableSection} onPress={() => toggleSection('terms')}>
        <Text style={styles.sectionTitle}>Terms of Service</Text>
      </TouchableOpacity>
      {termsVisible && (
        <Text style={styles.sectionContent}>
          These Terms of Service govern the use of this app. By using our app, you agree to comply with all the terms outlined herein. You are responsible for maintaining the confidentiality of your account details and ensuring the security of your device. We reserve the right to modify or discontinue the app at any time. The app is provided "as is" without warranties of any kind, either express or implied. Your use of the app is at your own risk. For further inquiries, feel free to contact us.        </Text>
      )}

      <TouchableOpacity style={styles.expandableSection} onPress={() => toggleSection('cookiePolicy')}>
        <Text style={styles.sectionTitle}>Cookie Policy</Text>
      </TouchableOpacity>
      {cookiePolicyVisible && (
        <Text style={styles.sectionContent}>
          This app uses cookies to enhance your experience. Cookies help us understand how you interact with the app so we can improve functionality and user experience. We do not track sensitive data, and cookies are used solely for performance and preference purposes. You can disable cookies in your device settings, but doing so may limit some app functionalities. By continuing to use the app, you consent to our use of cookies.        </Text>
      )}

      <TouchableOpacity style={styles.expandableSection} onPress={() => toggleSection('appPermissions')}>
        <Text style={styles.sectionTitle}>App Permissions</Text>
      </TouchableOpacity>
      {appPermissionsVisible && (
        <Text style={styles.sectionContent}>
          This app requests permission to access notifications in order to remind you about your tasks. We will not access your personal data or media files without your explicit consent. If you have any concerns regarding permissions, please review your settings on your device. Your privacy is a priority for us.        </Text>
      )}

      <TouchableOpacity style={styles.expandableSection} onPress={() => toggleSection('dataProtection')}>
        <Text style={styles.sectionTitle}>Data Protection and User Rights</Text>
      </TouchableOpacity>
      {dataProtectionVisible && (
        <Text style={styles.sectionContent}>
          Your personal data is protected in accordance with applicable data protection laws. You have the right to access, modify, or delete your personal data at any time. To request changes or removal of your information, please contact our support team. We strive to protect your data using the latest security measures. If you have any concerns, please refer to our Privacy Policy or reach out to us directly.        </Text>
      )}

      {/* Contact Information */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Contact Us</Text>
        <Text style={styles.contactText}>Email: shiftcodetechnologies@gmail.com</Text>
        <Text style={styles.contactText}>Feel free to reach out for support or inquiries. We're here to help!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    marginVertical: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  faqContainer: {
    marginVertical: 20,
  },
  faqTitle: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  faqItem: {
    marginVertical: 8,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  faqAnswer: {
    fontSize: 16,
    color: '#555',
  },
  expandableSection: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    paddingLeft: 10,
  },
  contactContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
