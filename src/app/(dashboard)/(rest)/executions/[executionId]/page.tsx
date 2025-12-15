interface PageProps {
    params: Promise<{
        executionId: string;
    }>
};

const Page = async ({ params }: PageProps) => {
    const { executionId } = await params;

    return <p>execution id: {executionId}</p>
};

export default Page;

// 4:39:10