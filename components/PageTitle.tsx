export default function PageTitle({ title }) {
    return (
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          { title }
        </h1>
    );
}