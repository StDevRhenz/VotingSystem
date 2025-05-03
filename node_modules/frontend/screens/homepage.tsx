import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import CandidateItem from '../screens/CandidateItem';
import { Candidate, CoalitionGroup } from '../screens/types';
import styles from './homepage.styles';

const Homepage: React.FC = () => {
  const [candidateData, setCandidateData] = useState<CoalitionGroup[]>([]);
  const [selectedCandidates, setSelectedCandidates] = useState<Candidate[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const MAX_SELECTION = 12;

  // Fetch candidate data from the backend
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch('https://voting-system-qtoj0lotp-stdevrhenzs-projects.vercel.app/api/getCandidates'); // Replace with your computer's IP // Replace localhost with your IP if testing on a mobile device
        const data = await response.json();
        setCandidateData(data);
      } catch (error) {
        console.error('Error fetching candidate data:', error);
        Alert.alert('Error', 'Failed to load candidate data.');
      }
    };
  
    fetchCandidates();
  }, []);

  const toggleCandidate = (candidate: Candidate): void => {
    const isSelected = selectedCandidates.some((c) => c.id === candidate.id);

    if (isSelected) {
      setSelectedCandidates(selectedCandidates.filter((c) => c.id !== candidate.id));
    } else if (selectedCandidates.length < MAX_SELECTION) {
      setSelectedCandidates([...selectedCandidates, candidate]);
    } else {
      Alert.alert(
        'Maximum Selection',
        `You can only select up to ${MAX_SELECTION} candidates.`,
        [{ text: 'OK' }]
      );
    }
  };

  const handleSubmit = (): void => {
    if (selectedCandidates.length === 0) {
      Alert.alert('No Selection', 'Please select at least 1 candidate.');
      return;
    }

    setModalVisible(true);
  };

  const handleConfirmVotes = (): void => {
    setModalVisible(false);
    Alert.alert('Success', 'Your votes have been submitted successfully!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>2025 Senate Elections</Text>
          <Text style={styles.subheader}>Select up to {MAX_SELECTION} candidates</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${(selectedCandidates.length / MAX_SELECTION) * 100}%` },
                ]}
              />
            </View>
            <Text style={styles.counterText}>
              {selectedCandidates.length}/{MAX_SELECTION} selected
            </Text>
          </View>
        </View>

        <ScrollView
          style={styles.listContainer}
          contentContainerStyle={styles.listContentContainer}
          showsVerticalScrollIndicator={false}
          contentInset={{ bottom: 80 }}
        >
          {candidateData.map((group, index) => (
            <View key={index} style={styles.coalitionGroup}>
              <Text style={styles.coalitionHeader}>{group.coalition}</Text>
              {group.candidates.map((candidate) => (
                <CandidateItem
                  key={candidate.id}
                  candidate={candidate}
                  isSelected={selectedCandidates.some((c) => c.id === candidate.id)}
                  toggleCandidate={toggleCandidate}
                />
              ))}
            </View>
          ))}
          <View style={{ height: 100 }} />
        </ScrollView>

        <View style={styles.stickyFooter}>
          <TouchableOpacity
            style={[
              styles.submitButton,
              selectedCandidates.length === 0 && styles.disabledButton,
            ]}
            onPress={handleSubmit}
            disabled={selectedCandidates.length === 0}
          >
            <Text style={styles.submitText}>
              {selectedCandidates.length > 0
                ? `Submit ${selectedCandidates.length} Votes`
                : 'Select Candidates'}
            </Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>Confirm Your Votes</Text>
              <Text style={styles.modalSubtext}>
                You selected {selectedCandidates.length} candidate
                {selectedCandidates.length !== 1 ? 's' : ''}:
              </Text>

              <ScrollView style={styles.modalCandidateList}>
                {selectedCandidates.map((candidate) => (
                  <View key={candidate.id} style={styles.modalCandidateItem}>
                    <Text style={styles.modalCandidateName}>{candidate.name}</Text>
                    <View style={styles.modalCandidateDetails}>
                      <View style={styles.modalPartyBadge}>
                        <Text style={styles.modalPartyText}>{candidate.party}</Text>
                      </View>
                      <Text style={styles.modalPositionText}>{candidate.position}</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>

              <View style={styles.modalButtonGroup}>
                <TouchableOpacity
                  style={styles.modalCancelButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalCancelText}>Edit Choices</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalConfirmButton}
                  onPress={handleConfirmVotes}
                >
                  <Text style={styles.modalConfirmText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Homepage;