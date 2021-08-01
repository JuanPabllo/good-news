import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import style from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
      return;
    }

    // Criaçãp checkout session
    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      type="button"
      className={style.subscribeButton}
    >
      Subscribe Now
    </button>
  );
}
