import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Candidate } from '../types';
import styles from '../screens/homepage.styles';

interface CandidateItemProps {
  candidate: Candidate;
  isSelected: boolean;
  toggleCandidate: (candidate: Candidate) => void;
}

const CandidateItem: React.FC<CandidateItemProps> = ({ candidate, isSelected, toggleCandidate }) => {
  return (
    <TouchableOpacity
      key={candidate.id}
      style={[
        styles.candidateItem,
        isSelected && styles.selectedCandidateItem,
      ]}
      onPress={() => toggleCandidate(candidate)}
    >
      <Checkbox
        status={isSelected ? 'checked' : 'unchecked'}
        color="#3B82F6"
      />
      <View style={styles.candidateInfo}>
        <Text style={styles.candidateName}>{candidate.name}</Text>
        <View style={styles.candidateMeta}>
          <View style={styles.partyBadge}>
            <Text style={styles.candidateParty}>{candidate.party}</Text>
          </View>
          <Text style={styles.candidatePosition}>{candidate.position}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CandidateItem;