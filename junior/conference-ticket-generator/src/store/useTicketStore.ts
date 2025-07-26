import type { FileWithPath } from 'react-dropzone';
import { create } from 'zustand';

export interface FileWithPreview extends FileWithPath {
  preview: string;
}

interface TicketState {
  isLoading: boolean;
  isRegistered: boolean;
  name: string;
  email: string;
  username: string;
  avatar?: FileWithPreview;
}

interface TicketActions {
  setIsLoading: (loading: boolean) => void;
  setIsRegistered: (registered: boolean) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setUsername: (username: string) => void;
  setAvatar: (avatar: FileWithPreview) => void;
}

type TicketStore = TicketState & TicketActions;

const useTicketStore = create<TicketStore>((set) => ({
  isLoading: false,
  isRegistered: false,
  name: '',
  email: '',
  string: '',
  username: '',

  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  setIsRegistered: (isRegistered: boolean) => set(() => ({ isRegistered })),
  setName: (name: string) => set(() => ({ name })),
  setEmail: (email: string) => set(() => ({ email })),
  setUsername: (username: string) => set(() => ({ username })),
  setAvatar: (avatar: FileWithPreview) => set(() => ({ avatar })),
}));

export default useTicketStore;
