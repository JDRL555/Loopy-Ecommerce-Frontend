import { Button } from '@nextui-org/button'

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl text-center p-5">
        Welcome to Loopy:D
      </h2>
      <Button className='bg-slate-800 text-slate-100 block m-auto'>
        Click me!
      </Button>
    </div>
  );
}
