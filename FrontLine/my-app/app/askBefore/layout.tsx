export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center  justify-center gap-4 py-8 md:py-10 "style={{ minHeight: 'calc(100vh - 10rem)' }}>
			<div className="inline-block text-center">
				{children}
			</div>
		</section>
	);
}
