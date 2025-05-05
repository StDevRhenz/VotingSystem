export interface Candidate {
    id: number;
    name: string;
    party: string;
    position: string;
  }
  
  export interface CoalitionGroup {
    coalition: string;
    candidates: Candidate[];
  }