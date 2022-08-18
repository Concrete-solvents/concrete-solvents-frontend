// Libraries
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faGithub, faGoogle, faSteam } from '@fortawesome/free-brands-svg-icons';

interface SignInWithCase {
  icon: IconDefinition;
  name: string;
  ariaLabelKey: string;
}

interface SignInWithConfig {
  cases: SignInWithCase[];
}

const signInWithConfig: SignInWithConfig = {
  cases: [
    {
      name: 'google',
      icon: faGoogle,
      ariaLabelKey: 'signInWithGoogle',
    },
    {
      name: 'github',
      icon: faGithub,
      ariaLabelKey: 'signInWithGithub',
    },
    {
      name: 'steam',
      icon: faSteam,
      ariaLabelKey: 'signInWithSteam',
    },
    {
      name: 'discord',
      icon: faDiscord,
      ariaLabelKey: 'signInWithDiscord',
    },
  ],
};

export { signInWithConfig };
export type { SignInWithCase };
