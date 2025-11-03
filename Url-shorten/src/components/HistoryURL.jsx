import React from 'react';
import '../styles/HistoryURL.css'

const HistoryURL = () => {
  return (
          <div>
              <h1>URL History</h1>
                  <div className='TableContainer'>
                      <table>
                          <thead>
                              <tr>
                                  <th>Original URL</th>
                                  <th>Short URL</th>
                                  <th>Clicks</th>
                                  <th>Created</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                                  <tr>
                                      <td>
                                          <div className='UrlText'>
                                              url
                                          </div>
                                      </td>
                                      <td>
                                          <div className='UrlText ShortLink'>
                                              short
                                          </div>
                                      </td>
                                      <td>
                                          <div className='ClicksCount'>
                                              Clicks
                                          </div>
                                      </td>
                                      <td>
                                          <div className='CreateDate'>
                                              create day
                                          </div>
                                      </td>
                                      <td>
                                          <div className='Copy'>
                                              copy
                                          </div>
                                      </td>
                                  </tr>
                          </tbody>
                      </table>
                  </div>
          </div>
  );
};

export default HistoryURL;
