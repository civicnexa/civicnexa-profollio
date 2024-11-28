import { apiUrl } from "@/common/services";
import { toast } from "react-toastify";


type MessageProp = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function useSendAppMessage() {
    const api_url = apiUrl;

    const sendUsMessage = async(
        data: MessageProp
    ) => {
        try {
            const response = await fetch(`${api_url}/contact/`, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
      
            if (!response.ok) {
              throw new Error('Failed to send message');
            }
      
            const result = await response.json();
            // console.log('Message sent successfully:', result);
            if(result.status === "success"){
                toast.success(result.message);
            }else if(result.status === "failed"){
                toast.error(result.message);
            }
            return result;
        } catch (err: any) {
            console.error('Error sending message:', err);
        }
    }

    return {
        sendUsMessage
    }
}
