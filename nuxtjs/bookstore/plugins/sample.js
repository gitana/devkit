var build_branch = function(context)
{
  var repositoryId = context.repositoryId;
  var branchId = context.branchId;
  
  var bindExtraProperties_response = async function(response)
  {
    if (response && response.rows)
    {
      for (let row of response.rows)
      {
        bindExtraProperties_row(row);
      }
    }
  }

  var bindExtraProperties_row = async function(row)
  {
    try {
      row.defaultAttachmentUrl = (await context.$cloudcms.createAttachmentLink(repositoryId, branchId, row._doc));
    } catch (e) {
      // swallow
    }
  }


  ///

  var r = {};

  r.query = async function(query, pagination)
  {
    var response = (await context.$cloudcms.queryNodes(repositoryId, branchId, query, pagination));
    if (response && response.rows && response.rows.length > 0)
    {
      (await bindExtraProperties_response(response));
    }

    return response;
  };

  r.queryOne = async function(query, pagination)
  {
    var row = null;

    var response = (await context.$cloudcms.queryNodes(repositoryId, branchId, query, pagination));
    if (response && response.rows && response.rows.length > 0)
    {
      row = response.rows[0];
    }

    if (row)
    {
      bindExtraProperties_row(row);
    }

    return row;
  };

  r.createAttachmentLink = async function(nodeId, attachmentId)
  {
    var url = null;
    try {
      url = (await context.$cloudcms.createAttachmentLink(nodeId, attachmentId));
    } catch (e) {
      // swallow
    }

    return url;
  }

  return r;
};

export default function (context) {
  context.$branch = build_branch(context);
};
