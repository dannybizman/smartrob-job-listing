type Props = {
   onClick: () => void;
   disabled?: boolean;
 };
 
 export default function LoadMoreButton({ onClick, disabled }: Props) {
   return (
     <button
       onClick={onClick}
       disabled={disabled}
       className="mt-4 mb-4 px-4 py-2 bg-[#3179A0] text-white rounded-full hover:bg-[#3179A0] disabled:bg-gray-400"
     >
       Load More
     </button>
   );
 }
 