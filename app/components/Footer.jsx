export default function Footer() {
  return (
    <div className='bg-black text-white text-center content-center h-20 mt-auto border border-white'>
      &copy; {new Date().getFullYear().toString()} Wagontec {'</>'}
    </div>
  );
}
