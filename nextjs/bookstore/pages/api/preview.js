
export default async function handler (req, res)
{
    const repository = req.query.repository || process.env.repositoryId;
    const branch = req.query.branch || process.env.branchId;
    const url = req.query.url || "/";

    res.setPreviewData({ repository, branch });
    res.redirect(url);
}